
// import { Card, Modal, Button } from 'react-bootstrap';

// export default function Cartshow ({ show, onHide, cartItems, handleRemoveItem }) {
//     const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

//     return (
//       <Modal show={show} onHide={onHide}>
//         <Modal.Header closeButton>
//           <Modal.Title>Product Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty</p>
//           ) : (
//             <div>
//               <ul style={{ listStyleType: 'none', padding: 0 }}>
//                 {cartItems.map((item, index) => (
//                   <li key={index}>
//                     <Card style={{ width: '100%', margin: '10px'  }}>
//                       <div className="d-flex">
//                         <Card.Img
//                           variant="top"
//                           src={item.image}
//                           style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
//                         />
//                         <Card.Body className="d-flex flex-column justify-content-between">
//                           <div>
//                             <Card.Title>{item.title}</Card.Title>
//                             <Card.Text>{item.description}</Card.Text>
//                             <Card.Text><strong>Price:</strong> Rs.{item.price}</Card.Text>
//                           </div>
//                           <Button variant="danger" style={{height:'50px'}} onClick={() => handleRemoveItem(index)}>
//                             Remove
//                           </Button>
//                         </Card.Body>
//                       </div>
//                     </Card>
//                   </li>
//                 ))}
//               </ul>
//               <h5>Total Amount: Rs.{totalAmount}</h5>
//             </div>
//           )}
//         </Modal.Body>
//       </Modal>
//     );
// }



// Inside your Cartshow component:
import { useEffect, useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

export default function Cartshow({ show, onHide }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cartItems from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  // Store cartItems in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <Card style={{ width: '100%', margin: '10px' }}>
                    <div className="d-flex">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
                      />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                          <Card.Text><strong>Price:</strong> Rs.{item.price}</Card.Text>
                        </div>
                        <Button
                          variant="danger"
                          style={{ height: '50px' }}
                          onClick={() => handleRemoveItem(index)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
            <h5>Total Amount: Rs.{totalAmount}</h5>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
