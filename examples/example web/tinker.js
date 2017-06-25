function D1(){
    var particle = new Particle();
    
    var fnPr = particle.callFunction({ deviceId: 'DEVICE_ID', name: 'brew', argument: 'D0:HIGH', auth: token });

    fnPr.then(
    function(data) {
    console.log('Function called succesfully:', data);
    }, function(err) {
    console.log('An error occurred:', err);
    });
}