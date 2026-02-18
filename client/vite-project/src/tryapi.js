const API_URL = "http://localhost:5000/api"

export async function submitComplaint({ category, message }) {
    const res = await fetch(`${API_URL}/complaints`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, message })
    })
    return res.json()
}

export async function adminLogin(password) {
    const res = await fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
    })
    return res.json()
}

export async function fetchComplaints(token) {
    const res = await fetch(`${API_URL}/complaints`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
}
