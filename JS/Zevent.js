let Streamers = {
    "Zerator":{
        title:"zerator",
        img: "../images/Streamers/Zerator.jpg"

    },
    "Jeel":{
        title:"jeeltv",
        img:"../images/Streamers/jeel.png"

    },
    "AntoineDaniels":{
        title:"antoinedaniel",
        img:"../images/Streamers/antoinedaniels.png"

    },
    "MisterMv":{
        title:"mistermv",
        img:"../images/Streamers/mistermv.png"

    },
    "Ponce":{
        title:"ponce",
        img:"../images/Streamers/ponce.png"
    },
    "BagherasJones":{
        title:"bagherajones",
        img:"../images/Streamers/bagherasjones.png"
    },
    "Alphacast":{
        title:"alphacast",
        img:"../images/Streamers/alphacast.png"
    },
    "Ultia":{
        title:"ultia",
        img:"../images/Streamers/ultia.png"
    },
    "Moman":{
        title:"moman",
        img:"../images/Streamers/moman.png"
    
    },
    "Avamind":{
        title:"avamind",
        img:"../images/Streamers/avamind.png"
    
    },
    "Lapi":{
        title:"lapi",
        img:"../images/Streamers/lapi.png"
    
    },
    "Hortyunderscore":{
        title:"hortyunderscore",
        img:"../images/Streamers/hortyunderscore.png"
    
    },
    "Rivenzi":{
        title:"rivenzi",
        img:"../images/Streamers/rivenzi.png"
    
    },
    "Trinity":{
        title:"trinity",
        img:"../images/Streamers/trinity.png"
    
    },
    "Jiraya":{
        title:"jirayalecochon",
        img:"../images/Streamers/jiraya.png"
    
    },
    "Tonton":{
        title:"tonton",
        img:"../images/Streamers/tonton.png"
    
    },
    "AngleDroit":{
        title:"angledroit",
        img:"../images/Streamers/angledroit.png"
    
    },
    "Altair":{
        title:"altair",
        img:"../images/Streamers/altair.png"
    
    },
    "PapeSan":{
        title:"papesan",
        img:"../images/Streamers/papesan.png"

    },
    "Jeanmassiet":{
        title:"jeanmassiet",
        img:"../images/Streamers/jeanmassiet.jpg"
    }

    


}
window.onload = function() {
    let list = document.getElementById("list");

    for (let Streamer in Streamers) {
        list.innerHTML += `<button data-game="${Streamer}" onclick=" window.open('https://www.twitch.tv/${Streamers[Streamer].title}', '_blank');" target="_blank"
                             style="background: url(${Streamers[Streamer].img}) no-repeat; background-size: cover;" class="Streamers_btn">
                                <article>
                                    <p>${Streamer} <br />  
                                        
                                    </p> 
                                </article>
                            </button>`;
    }
}