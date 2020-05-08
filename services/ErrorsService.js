export class ErrorsService {
	private static shared = new ErrorsService();
	public errors$: Observable<Error>;
	private errorsStream$ = new ReplaySubject<Error>(1);
	
	public static get instance() {
		return this.shared;
	}

	public onError(error: Error) {
		this.errorsStream$.next(error);
	}

	private initHandler() {
		const scope = this;
		
		window.onerror = (message: Event | string, url?: string, lineNo?: number, columnNo?: number, error?: Error) => {
			if (error) scope.onError(error);
		};
	}

	constructor() { 
		this.errors$ = this.errorsStream$.asObservable(); 
	}
}