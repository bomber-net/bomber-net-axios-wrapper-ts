import {Axios,AxiosRequestConfig,AxiosResponse} from 'axios';
import Callbacks from './Callbacks';
import {isPlainObject} from 'lodash';

export default abstract class Request extends Callbacks
	{
		protected axios:Axios;
		protected globalCallbacks:object;
		protected url:string;
		protected config?:AxiosRequestConfig;

		constructor (axios:Axios,globalCallbacks:object,url:string,config?:AxiosRequestConfig)
			{
				super ();
				this.axios=axios;
				this.globalCallbacks=globalCallbacks;
				this.url=url;
				this.config=config;
			}

		protected requestSuccess (response:AxiosResponse):void
			{
				let {data}=response;
				for (let callback of this.mergedCallbacks (200)) callback (data,response);
			}

		protected requestFail (reason:any):void
			{
				let {response,status}=reason;
				if (isPlainObject (response))
					{
						let {data}=response;
						for (let callback of this.mergedCallbacks ('fail'))
							{
								let retry=callback (data,response);
								// @ts-ignore
								if ([true,false].includes (retry))
									{
										if (retry) this.run ();
										return;
									}
							}
						for (let callback of this.mergedCallbacks (status))
							{
								let retry=callback (data,response);
								// @ts-ignore
								if ([true,false].includes (retry))
									{
										if (retry) this.run ();
										return;
									}
							}
					}
			}

		protected mergedCallbacks (code:number|string):Array<Function>
			{
				// @ts-ignore
				return [].concat (this.callbacks[code] ?? [],this.globalCallbacks[code] ?? []);
			}

		public abstract run ():void;
	}
