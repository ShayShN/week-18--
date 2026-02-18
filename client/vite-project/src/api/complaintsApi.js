const API_URL = "http://localhost:3001"

export async function createMassege({category, message}) {
    try {
        const result = await fetch(API_URL + "/api/complaints", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ category, message })
        })
        const data = await result.json();
        console.log(data);
        
        return data;
    } catch (error) {
        
    }
}

export async function login(pass) {
    try {
        const res = await fetch(API_URL + "/api/admin/login", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ pass })
        })
        const data = await res.json();
        return data;
    } catch (err) {

    }

}

