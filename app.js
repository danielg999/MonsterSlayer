function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    methods: {
        attachMonster(){
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attachPlayer();
        },
        attachPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        }
    },
    computed: {

    },
    watch: {

    }
})

app.mount('#game');