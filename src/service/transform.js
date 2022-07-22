//esse arquivo faz a transformação de id para respectiva categoria
//id_category, id_status, id_source


const transformarIdCategory = async (activeEquips) => {

    for (let i = 0 ; i < activeEquips.length ; i++) {
        activeEquips[i].id_category = switchIdCategory(activeEquips[i].id_category); }
};
const transformarIdStatus = async (activeEquips) => {
    for (let i = 0 ; i < activeEquips.length ; i++) {
        activeEquips[i].id_status = switchIdStatus(activeEquips[i].id_status); }
    };

const transformarIdSource = async () => {
    switch (id_source) {
        case 1:
            return "Doação";
        case 2:
            return "Compra";
        case 3:
            return "Alugado";
        default:
            return "Não identificado";
    }
}

function switchIdCategory(id_category){
    switch (id_category) {
        case 1:
            return "Móveis";
        case 2:
            return "Notebook";
        case 3:
            return "Teclado";
        case 4:
            return "Mouse";
        case 5:
            return "Monitor";
        case 6:
            return "Estabilizador";
        case 7:
            return "Chromebook";
        case 8:
            return "Peça-Hardware";
        default:
            return "Não identificado";
        }

};
function switchIdStatus(id_status){
    switch(id_status){
        case 1:
            return "Ativo";
        case 2:
            return "Emprestado";
        case 3:
            return "Manutenção";
        case 4:
            return "Offline";

}
}

const transform = {
    transformarIdCategory,
    transformarIdStatus,
    transformarIdSource,

}
export default transform
