import Request from './Requet';

export default class GETWrapper extends Request
	{
		run ():void
			{
				this.axios.get (this.url,this.config).then (this.requestSuccess.bind (this),this.requestFail.bind (this));
			}
	}
