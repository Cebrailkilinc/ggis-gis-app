import React from 'react'

interface Props {
  name: string;
  age: number;
  email?: string; // Opsiyonel prop
  onClick: () => void;
}

const Sider = () => {
  return (
    <div>Sider</div>
  )
}

export default Sider