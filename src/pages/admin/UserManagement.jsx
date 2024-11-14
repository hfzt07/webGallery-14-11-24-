import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

const Container = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;

const UserGrid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
`;

const UserCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const ActionButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
  background: ${props => props.delete ? '#ff4444' : '#00ff87'};
  color: white;
`;

const AddUserButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', role: 'Administrator' },
    { id: 2, username: 'moderator', role: 'Moderator' },
    { id: 3, username: 'user1', role: 'User' },
  ]);

  return (
    <Container>
      <AdminPageHeader>Manajemen Moderator</AdminPageHeader>
      <AddUserButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Add New Moderator
      </AddUserButton>
      
      <UserGrid>
        {users.map(user => (
          <UserCard
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h3>{user.username}</h3>
              <p>{user.role}</p>
            </div>
            <div>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit
              </ActionButton>
              <ActionButton
                delete
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete
              </ActionButton>
            </div>
          </UserCard>
        ))}
      </UserGrid>
    </Container>
  );
}

export default UserManagement; 