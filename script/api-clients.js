const endPoint = "http://localhost:3000/";

//GET
const getData = async () => {
  requestOptionsGet = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(endPoint, requestOptionsGet);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

//POST
const postData = async (task) => {
  const requestOptionsPost = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  try {
    const res = await fetch(endPoint, requestOptionsPost);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

//PUT
const updateData = async (id, task) => {
  const requestOptionsPut = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  try {
    const res = await fetch(`${endPoint}${id}`, requestOptionsPut);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

//DELETE
const deleteData = async (id) => {
  const requestOptionsDel = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(`${endPoint}${id}`, requestOptionsDel);
  } catch (error) {
    console.log(error);
  }
};
