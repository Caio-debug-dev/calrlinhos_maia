        function validardataDeNascimento(data){

            dataAtual= new Date();

            data=new Date(data);

            if (data<dataAtual){
                console.log("Data Válida");
                return true;
            } else {
                console.log("Data Inválida");
                return false;
            }


        }
