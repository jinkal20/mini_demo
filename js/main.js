(() =>{
    //grab all cars
    //const cars = document.querySelectorAll('.dtaa-ref');
    const vm = new Vue({
        el : "#app",
        
        data : {
            carModel : "",
            carDescription : "",
            carPricing : ""
        },

        mounted : function(){
            console.log('mounted');

            this.addPreloader(document.querySelector('.modelInfo'));
            document.querySelector("#F55").click();
        },

        updated: function(){
            console.log('updated');
            let preloader = documnet.querySelector('.preloader-wrapper');
            setTimeout(function(){
                preloader.classlist.add('.hidden');
                documnet.body.appendChild('.preloader');
            
            }, 3000);
        },
        method : {
            addPreloader(parentEl){
                parentEl.appendChild(document.querySelector('.preloader-wrapper'));
                bodymovin.loadAnimation({
                    wrapper : document.querySelector('.preloader'),
		            animType : 'svg',
		            loop : true,
		            autoplay : true,
		            path : './data/drop_in_the_ocean_.json'
                    
                });
            },
            getData(e){
                debugger;
                let targetURL = e.currentTarget.id;
                fetch = `./include/coonect.php?modelNo=${e,currentTarget.id}`;
                fetch(targetURL)
                then(res => res.json())
                .then(data => {
            console.log(data);
            const {modelName, pricing, modelDetails}= data[0];
            this.modelname = modelName;
            this.modeldetails = modelDetails;
            this.modelpricing = modelpricing;
            //parseCarData(data[0]);
            })
        .catch(function(error){
            console.error(error);
        });
        }

        }
    });
})();