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

//atualização em um equipamento

const updateEquipamento = async (id, data) => {
    const req = await fetch(`${baseUrl}devices/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data
    });
    const res = await req.json()
    return res
}
// inativa um equipamento
const inativarEquipamento = async (id) => {
    const req = await fetch(`${baseUrl}devices/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            enabled: false
        })
    });
    const res = await req.json()
    return res
}

//cadastra nova localização

const createLocal = async ( id , localizacao) => {
    const req = await fetch(`${baseUrl}devices/${id}/location`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: localizacao
    });
    const res = await req.json();
    return res;

}

const getLocal = async(id) =>{
    const req = await fetch(`${baseUrl}devices/${id}/location`,{
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    const res = await req.json();
    return res
}



const api = {
    login,
    createEquip,
    getAllEquipamentos,
    getEquipamento,
    updateEquipamento,
    inativarEquipamento,
    createLocal,
    getLocal,
    



}

export default api
