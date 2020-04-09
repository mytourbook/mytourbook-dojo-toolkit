define([
	'dojo/_base/declare',
	'./Request',
	'./Cache'
], function(declare, Request, Cache) {
	
	return declare("dstore.RequestMemory",[ Request, Cache ], {
		
		postscript: function () {
			this.inherited(arguments);
			this.fetch();
		},
		
		isValidFetchCache: true
	});
});
