import React from 'react';
import Button from './Button';
import '../styles/ButtonSelect.css';

const ButtonSelect = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <div className="btn_container">
        <Button disabled />
        <Button variant="text" disabled />
      </div>
      <div className="btn_container">
        <Button startIcon="local_grocery_store" />
        <Button endIcon="local_grocery_store" />
      </div>
      <div className="btn_container">
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
      </div>
      <div className="btn_container">
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </div>
    </div>
  );
};

export default ButtonSelect;
