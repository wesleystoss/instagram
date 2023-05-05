function like(action, itemFeed){
    console.log(action)
    const liked = document.getElementById("liked "+itemFeed)
    const unliked = document.getElementById("unliked "+itemFeed)
    if(action === true){
        unliked.style.display = "none"
        liked.style.display = "initial"
    }else{
        unliked.style.display = "initial"
        liked.style.display = "none"
    }
}

function carregaFeed(){
    var qtdItensFeed = 50
    for(i = 1; i < qtdItensFeed; i++){
        const getDiv = document.getElementsByTagName("main")[0]
        const itemFeed = `
            <div class="itemFeed ${i} container">
                <div class="userProfile mb-3">
                    <div>
                        <img src="https://github.com/wesleystoss.png" class="userPhoto" alt="">
                        <span>Wesley Santos</span>
                    </div>
                    <div class="text-end">
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>

                </div>
                <div class="divImg mb-3">
                    <img src="https://github.com/wesleystoss.png" alt="">
                </div>
                <div class="interacoes mb-3">
                    <div style="
                        width: 120px;
                        display: flex;
                        justify-content: space-between;
                    ">
                        <i class="bi bi-heart text-white" id="unliked ${i}" onclick="like(!false, ${i})"></i>
                        <i class="bi bi-heart-fill text-danger" id="liked ${i}" onclick="like(!true, ${i})" style="display: none"></i>
                        <i class="bi bi-chat text-white"></i>
                        <i class="bi bi-send text-white"></i>
                    </div>
                    <div class="text-end">
                        <i class="bi bi-bookmark"></i>
                    </div>
                </div>
                <div class="descricao">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id nisi iaculis porta. Duis rutrum eleifend massa, vitae efficitur nulla malesuada ac. Donec ultrices varius magna vel fermentum. Phasellus eget quam sapien. Nullam euismod faucibus velit sed pharetra. Suspendisse potenti.</p>
                </div>
            </div>
        
        `
        getDiv.innerHTML += itemFeed
    }
}