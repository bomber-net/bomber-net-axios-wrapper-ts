import WithDataRequest from './WithDataRequest';

export default class POSTWrapper extends WithDataRequest
	{
		run ():void
			{
				this.axios.post (this.url,this.data,this.config).then (this.requestSuccess.bind (this),this.requestFail.bind (this));
			}
	}
