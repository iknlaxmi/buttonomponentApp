import React, { useEffect, useState } from 'react';
import '../styles/Button.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Button = (props) => {
  const styleMain = {
    width: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    paddingRight: '30px',
    textAlign: 'center',
  };
  const [cname, setCname] = useState();
  const [blabel, setBlabel] = useState();
  const [startIcon, setStartIcon] = useState('');
  const [endIcon, setEndIcon] = useState('');
  const [padd, setPadd] = useState();

  useEffect(() => {
    setStartIcon('');
    setEndIcon('');
    if (props.variant === 'outline') {
      setBlabel('<Button variant="outline" >');
      setCname('btn buttonOutline');
    } else if (props.variant === 'text' && props.disabled) {
      setBlabel('<Button variant="text" disabled>');
      setCname('btn buttonTextDisabled');
      setPadd('60px');
    } else if (props.variant === 'text') {
      setBlabel('<Button variant="text" >');
      setCname('btn buttonText');
    } else if (props.disabled) {
      setBlabel('<Button disabled>');
      setCname('btn buttonDisabled');
      setPadd('60px');
    } else if (props.disableShadow) {
      setBlabel('<Button disableShadow >');
      setCname('btn buttonDisableShadow');
    } else if (props.startIcon === 'local_grocery_store') {
      setBlabel('<Button startIcon ="local_grocery_store">');
      setCname('btn buttonStartIcon');
      setStartIcon(<ShoppingCartIcon />);
      setPadd('250px');
    } else if (props.endIcon === 'local_grocery_store') {
      setBlabel('<Button endIcon ="local_grocery_store">');
      setCname('btn buttonEndIcon');
      setEndIcon(<ShoppingCartIcon />);
      setPadd('250px');
    } else if (props.size === 'sm') {
      setBlabel('<Button size="sm">');
      setCname('btn buttonSizeSm');
      setPadd('250px');
    } else if (props.size === 'md') {
      setBlabel('<Button size="md">');
      setCname('btn buttonSizeMd');
      setPadd('250px');
    } else if (props.size === 'lg') {
      setBlabel('<Button size="lg">');
      setCname('btn buttonSizeLg');
      setPadd('250px');
    } else if (props.color === 'default') {
      setBlabel('<Button color="default">');
      setCname('btn buttonColorDefault');
      setPadd('250px');
    } else if (props.color === 'primary') {
      setBlabel('<Button color="primary">');
      setCname('btn buttonColorPrimary');
      setPadd('250px');
    } else if (props.color === 'secondary') {
      setBlabel('<Button color="secondary">');
      setCname('btn buttonColorSecondary');
      setPadd('250px');
    } else if (props.color === 'danger') {
      setBlabel('<Button color="danger">');
      setCname('btn buttonColorDanger');
      setPadd('250px');
    } else {
      setBlabel('<Button />');
      setCname('btn buttonNormal');
    }
  }, [
    props.variant,
    props.disableShadow,
    props.disabled,
    props.startIcon,
    props.endIcon,
    props.size,
    props.color,
  ]);
  styleMain.paddingRight = padd;
  return (
    <div style={styleMain}>
      <h4 className="nowrap">{blabel}</h4>
      <button className={cname}>
        {startIcon}Default{endIcon}
      </button>
    </div>
  );
};

export default Button;
