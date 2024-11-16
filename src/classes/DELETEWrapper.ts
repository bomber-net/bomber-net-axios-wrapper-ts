import Request from './Requet';

export default class DELETEWrapper extends Request
	{
		run ():void
			{
				this.axios.delete (this.url,this.config).then (this.requestSuccess.bind (this),this.requestFail.bind (this));
			}
	}
