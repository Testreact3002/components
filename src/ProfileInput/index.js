import PropTypes from "prop-types";
import React, { useState } from "react";

const invalid = (setter) => (e) => {
  e.preventDefault;
  setter(true);
};
const ProfileInput = ({ fullName, email, phone, onSubmit = (state) => {} }) => {
  const [fnm, setFnm] = useState(fullName);
  const [eml, setEml] = useState(email);
  const [phn, setPhn] = useState(phone);
  const [fnmErr, setFnmErr] = useState(false);
  const [emlErr, setEmlErr] = useState(false);
  const [phnErr, setPhnErr] = useState(false);

  const nameError = fnmErr ? (
    <div className="profile-input__error">Вы неверно указали имя</div>
  ) : null;
  const emailError = emlErr ? (
    <div className="profile-input__error">Вы неверно указали email</div>
  ) : null;
  const phoneError = phnErr ? (
    <div className="profile-input__error">
      Вы неверно указали номер телефона
    </div>
  ) : null;

  return (
    <form
      className="profile-input"
      onSubmit={(e) => {
        e.preventDefault();
        if (!fnmErr && !emlErr && !phnErr) {
          onSubmit({ fullName: fnm, email: eml, phone: phn });
        }
      }}
      noValidate
    >
      <div className="profile-input__group">
        <label className="profile-input__item profile-input__item_type_name">
        >
<div 
            className="profile-input__label"
                    >Фамилия и имя
                                                                                  </div>
          <input 
            className="profile-input__input" type="text" placeholder="Укажите Ваши фамилию и имя" value={fnm} 
            onChange={(e)=>{setFnm(e.target.value); }}
/>{nameError}
        </label>
        <label className="profile-input__item profile-input__item_type_email">
          <div className="profile-input__label">E-mail</div>
<input className="profile-input__input" type="email" placeholder="Ivanova@mail.ru" value={eml} onChange={(e)=>{setEml(e.target.value); setEmlErr(e.target.value!="" && !/@[^.\s]+[.]\S*$/.test(e.target.value));  }} />
          {emailError}
        </label>
        <label className="profile-input__item profile-input__item_type_phone">
          <div className="profile-input__label">Номер телефона</div>
<input className="profile-input__input" type="tel" placeholder="Укажите номер телефона" value={phn} pattern="[+]7\d+" onChange={(e)=>{setPhn(e.target.value); setPhnErr(e.target.value!="" && !/^[+]7\d{10}$/.test(e.target.value));}} />
          {phoneError}
        </label>
      </div>
      <input
        type="submit"
        className="profile-input__submit"
        value="Сохранить изменения"
      />
    </form>
  );
};

export default ProfileInput;
