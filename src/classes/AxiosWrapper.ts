import axios,{Axios,AxiosDefaults,AxiosRequestConfig} from 'axios';
import Callbacks from './Callbacks';
import DELETEWrapper from './DELETEWrapper';
import GETWrapper from './GETWrapper';
import POSTWrapper from './POSTWrapper';
import PUTWrapper from './PUTWrapper';

export default class AxiosWrapper extends Callbacks
	{
		private readonly axios:Axios;

		constructor ()
			{
				super ();
				this.axios=axios;
			}

		public get defaults ():AxiosDefaults
			{
				return this.axios.defaults;
			}

		public set defaults (defaults:AxiosDefaults)
			{
				this.axios.defaults=defaults;
			}

		public request (method:string,url:string,data?:any,config?:AxiosRequestConfig):GETWrapper|POSTWrapper|PUTWrapper|DELETEWrapper
			{
				const m=method.toLowerCase ();
				switch (m)
					{
						case 'get':
							return this.get (url,config);
						case 'post':
							return this.post (url,data,config);
						case 'put':
							return this.put (url,data,config);
						case 'delete':
							return this.delete (url,config);
					}
			}

		public get (url:string,config?:AxiosRequestConfig):GETWrapper
			{
				return new GETWrapper (this.axios,this.callbacks,url,config);
			}

		public post (url:string,data?:any,config?:AxiosRequestConfig):POSTWrapper
			{
				return new POSTWrapper (this.axios,this.callbacks,url,data,config);
			}

		public put (url:string,data?:any,config?:AxiosRequestConfig):PUTWrapper
			{
				return new PUTWrapper (this.axios,this.callbacks,url,data,config);
			}

		public delete (url:string,config?:AxiosRequestConfig):DELETEWrapper
			{
				return new DELETEWrapper (this.axios,this.callbacks,url,config);
			}
	}
