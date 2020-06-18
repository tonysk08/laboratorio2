const controller ={};

controller.home = (req,res) => {
    res.render('index',{titulo:'Online Bus Tickets', pageName:'Index'});
}

controller.about = (req,res) =>{
    res.render('about',{titulo:'Acerca de', pageName:'Online Bus Tickets'});
}

controller.destinos = (req,res) =>{
    res.render('destinos',{titulo:'Destinos', pageName:'Nacionales'});
}

controller.horario =(req,res) => {
    res.render('horario',{titulo:'Horarios', pageName:'de Salida'});
}

controller.contact = (req,res) =>{
    res.render('contact',{titulo:'Contactenos', pageName:'Contactenos'});
}

controller.notFoud = (req,res) =>{
    res.status(404).render("404",{titulo:'404', pageName:'Page Not Found'})
}

module.exports = controller;