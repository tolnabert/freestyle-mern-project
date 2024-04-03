export const extractFormData = (e) => {
  const formObj = new FormData(e.target);
  const dogObj = {
    name: formObj.get('name'),
    breed: formObj.get('breed'),
    dateOfBirth: formObj.get('birth-day'),
    gender: formObj.get('gender'),
    size: formObj.get('size'),
    weight: formObj.get('weight'),
    socialized: formObj.get('socialized'),
    attitude: formObj.get('attitude').split(','),
    imgSource: formObj.get('img'),
  };
  return dogObj;
};
