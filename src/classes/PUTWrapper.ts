import WithDataRequest from './WithDataRequest';

export default class PUTWrapper extends WithDataRequest
	{
		run ():void
			{
				this.axios.put (this.url,this.data,this.config).then (this.requestSuccess.bind (this),this.requestFail.bind (this));
			}
	}
