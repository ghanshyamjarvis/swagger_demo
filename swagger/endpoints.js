const initializeEndpoints = (app)=>{



	app.get('/users', function(req, res) {
		res.json({ message: 'api!' });   
	});

	//app.get('/users',(req,res)=>res.end('Return All Users'));
	//app.get('/users/:id',(req,res)=>res.end(`Return id ${req.params.id}`));
}

module.exports = initializeEndpoints;