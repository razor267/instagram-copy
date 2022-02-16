import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./publications.module.css";
import plugs from "../../assets/images/plugs.png";
import { SavedPublic } from "./SavedPublic";

export const Publications = () => {
  const isContent = false;
  return (
    <div>
      <div className={s.content}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                {!isContent ? (
                  <div>
                    <img src={plugs} alt="Заглушка" />
                  </div>
                ) : (
                  <div>Карточки</div>
                )}
              </div>
            }
          />
          <Route path="/saved" element={<SavedPublic />} />
          <Route path="/marker" element={<>Отмечетки на карточках</>} />
        </Routes>
      </div>
    </div>
  );
};
