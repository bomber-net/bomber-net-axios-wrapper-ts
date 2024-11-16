import {Axios,AxiosRequestConfig} from 'axios';
import Request from './Requet';

export default abstract class WithDataRequest extends Request
	{
		protected data?:any;

		constructor (axios:Axios,globalCallbacks:object,url:string,data?:any,config?:AxiosRequestConfig)
			{
				super (axios,globalCallbacks,url,config);
				this.data=data;
			}
	}
