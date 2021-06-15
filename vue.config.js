module.exports = {
    //webpack configuration
	configureWebpack: {
	     //Turn off the performance tips of webpack
	    performance: {
		    hints:false
	    },
 
	     //Or
 
	     //Warning webpack performance tips
	    performance: {
	    	hints:'warning',
	    	 //Maximum volume at the beginning of the entrance
	    	maxEntrypointSize: 50000000,
	    	 //Maximum size of generated file
	    	maxAssetSize: 30000000,
	    	 //Only give performance tips for js files
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
	    	}
	    },
        target: 'serverless'
    }
}