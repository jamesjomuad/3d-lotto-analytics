export const helper = {
    methods: {
        txtParser: function(data){
            let lines = data.split('\r\n');
            let tree = lines.map(function(line){
                let item = line.split("\t")
                return {
                    date: item[2] +" "+ item[0],
                    combination: item[1],
                    winners: item[3]
                }
            });
            return tree;
        },
        generate3D(){
            return Math.floor(Math.random()*(999-100+1)+100);
        }
    }
}