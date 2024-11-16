export default abstract class Callbacks
	{
		protected callbacks:object;

		protected constructor ()
			{
				this.callbacks={};
			}

		public success (callback:Function):this
			{
				return this.status (200,callback);
			}

		public fail (callback:Function):this
			{
				if (callback instanceof Function)
					{
						// @ts-ignore
						if (!Object.keys (this.callbacks).includes ('fail')) this.callbacks['fail']=[];
						// @ts-ignore
						this.callbacks['fail'].push (callback);
					}
				return this;
			}

		public unauthorized (callback:Function):this
			{
				return this.status (401,callback);
			}

		public forbidden (callback:Function):this
			{
				return this.status (403,callback);
			}

		public notFound (callback:Function):this
			{
				return this.status (404,callback);
			}

		public sessionExpired (callback:Function):this
			{
				return this.status (419,callback);
			}

		public unprocessableEntity (callback:Function):this
			{
				return this.status (422,callback);
			}

		public status (code:number,callback:Function):this
			{
				if (callback instanceof Function)
					{
						let index=code.toFixed ();
						// @ts-ignore
						if (!Object.keys (this.callbacks).includes (index)) this.callbacks[index]=[];
						// @ts-ignore
						this.callbacks[index].push (callback);
					}
				return this;
			}
	}
