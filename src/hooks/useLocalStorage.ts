import { useState } from 'react';

interface Card {
  id: number;
  productName: string;
  image: string;
  price: number;
  discountedPrice: number;
}

const useLocalStorage = (key: string, initialValue: Card[]) => {
  // Инициализация состояния
  const [storedValue, setStoredValue] = useState<Card[]>(() => {
    try {
      // Попытка получить значение из локального хранилища по ключу
      const item = window.localStorage.getItem(key);
      // Если значение существует, то парсим его и возвращаем, иначе возвращаем начальное значение
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      // Если происходит ошибка (например, с парсингом), возвращаем начальное значение
      return initialValue;
    }
  });

  const setValue = (value: Card | ((val: Card[]) => Card[])) => {
    try {
      // Проверяем, является ли значение функцией, и если да, то выполняем ее с текущим состоянием
      // В противном случае просто сохраняем переданное значение
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Записываем новое состояние
      setStoredValue(valueToStore);
      // И сохраняем его в локальное хранилище
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (id: number) => {
    try {
      // Фильтруем массив, оставляем только те элементы, id которых не совпадают с переданным
      const updatedArray = storedValue.filter((item: Card) => item.id !== id);
      // Записываем новый массив в состояние
      setStoredValue(updatedArray);
      // И сохраняем его в локальное хранилище
      window.localStorage.setItem(key, JSON.stringify(updatedArray));
    } catch (error) {
      console.log(error);
    }
  };

  // Возвращаем текущее значение, функцию для обновления и функцию для удаления
  return [storedValue, setValue, removeItem];
};

export default useLocalStorage;
