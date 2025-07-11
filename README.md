UpcomingPayments Component – FinLog
This component is part of the FinLog web application, designed to track and manage upcoming payment reminders in a clean, modern, and responsive way.

✨ Features
Add new upcoming payments with:

Payment title

Amount in Kenyan Shillings (Ksh)

Due date

Optional notes

Display upcoming payments in a responsive, animated card layout.

Smooth entry animations using Framer Motion.

Built with React.js, Bootstrap 5, and Framer Motion.

📁 File Location
bash
Copy
Edit
/src/components/UpcomingPayments.js
🛠️ Technologies Used
React.js

Bootstrap 5

Framer Motion

✅ How to Use
Ensure your project has the following dependencies installed:

bash
Copy
Edit
npm install framer-motion bootstrap
Import and use the component in your parent dashboard or page:

jsx
Copy
Edit
import UpcomingPayments from './components/UpcomingPayments';
Provide props:

upcomingPayments (array)

onAdd (function to handle adding a new payment)

Example Usage:

jsx
Copy
Edit
const [upcomingPayments, setUpcomingPayments] = useState([]);

const handleAddPayment = (payment) => {
  setUpcomingPayments([...upcomingPayments, payment]);
};

<UpcomingPayments
  upcomingPayments={upcomingPayments}
  onAdd={handleAddPayment}
/>
🎨 Styling Notes
Payment cards are styled with Bootstrap 5 and Framer Motion animations.

Rounded corners, subtle shadows, and responsive grid layout included.

📸 Screenshots
Desktop View	Mobile View

⚙️ Customization Suggestions
Integrate with a backend or local storage for persistent payment reminders.

Add delete or edit functionality for each payment card.

Style cards with color indicators based on due date urgency.

🧑‍💻 Author
Developed by Elisha Oigara
