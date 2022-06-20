const baseUrl = 'https://estoque-plataforma.herokuapp.com/'




//loga no site
const login = async (data) => {
    const req = await fetch(`${baseUrl}login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data

    });

    const res = await req.json();
    if (res.accessToken) {
        localStorage.setItem('token', res.accessToken);
        return res;
    }
}
//cadastra novo equipamento
const createEquip = async (teste) => {
    const req = await fetch(`${baseUrl}devices`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: teste
    });
    const res = await req.json();
    return res;
}

//pega todos os equipamentos
const getAllEquipamentos = async () => {
    const req = await fetch(`${baseUrl}devices`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    const res = await req.json()
    return res
}

//pega um equipamento especifico
const getEquipamento = async (id) => {
    const req = await fetch(`${baseUrl}devices/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    const res = await req.json()
    return res
}





const api = {
    getAllEquipamentos,
    createEquip,
    login,
    getEquipamento,


}

export default api
