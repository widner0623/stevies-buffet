const API_URL = "https://localhost:5000/api";

export const getMenu = async () => {
    const res = await fetch(`${API_URL}/menu`);
    return res.json();
};

export const createOrder = async (order) => {
    const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    });

    return res.json();
}