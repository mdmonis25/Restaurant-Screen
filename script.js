// Hardcoded orders data
const orders = [
    {
        id: 1,
        items: "Pizza Margherita, Caesar Salad",
        status: "pending"
    },
    {
        id: 2,
        items: "Spaghetti Carbonara, Garlic Bread",
        status: "completed"
    },
    {
        id: 3,
        items: "Grilled Salmon, Steamed Vegetables",
        status: "cancelled"
    },
    {
        id: 4,
        items: "Cheeseburger, Fries, Cola",
        status: "pending"
    },
    {
        id: 5,
        items: "Tiramisu, Cappuccino",
        status: "completed"
    }
];

// Function to render orders
function renderOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = ''; // Clear existing content

    orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        const orderDetails = document.createElement('div');
        orderDetails.classList.add('order-details');

        const orderId = document.createElement('div');
        orderId.classList.add('order-id');
        orderId.textContent = `Order #${order.id}`;

        const orderItems = document.createElement('div');
        orderItems.classList.add('order-items');
        orderItems.textContent = order.items;

        const orderStatus = document.createElement('div');
        orderStatus.classList.add('order-status');
        orderStatus.textContent = order.status;

        // Add status-specific class
        if (order.status === "pending") {
            orderStatus.classList.add('status-pending');
        } else if (order.status === "completed") {
            orderStatus.classList.add('status-completed');
        } else if (order.status === "cancelled") {
            orderStatus.classList.add('status-cancelled');
        }

        // Append elements to the order card
        orderDetails.appendChild(orderId);
        orderDetails.appendChild(orderItems);
        orderCard.appendChild(orderDetails);
        orderCard.appendChild(orderStatus);

        // Append the order card to the orders list
        ordersList.appendChild(orderCard);
    });
}

// Render orders on page load
document.addEventListener('DOMContentLoaded', renderOrders);