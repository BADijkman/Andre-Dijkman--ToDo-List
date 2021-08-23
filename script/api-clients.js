const endPoint = "http://localhost:3000/";

//GET
const getData = async () => {
  requestOptionsGet = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(endPoint, requestOptionsGet);
    if (!res.ok) {
      const message = `An error has occured: status ${res.status}`;
      throw new Error(message);
    }
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
    if (!res.ok) {
      const message = `An error has occured: status ${res.status}`;
      throw new Error(message);
    }
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
    if (!res.ok) {
      const message = `An error has occured: status ${res.status}`;
      throw new Error(message);
    }
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
    console.log (res)
    if (!res.ok) {
      const message = `An error has occured: status ${res.status}`;
      throw new Error(message);
    }
  } catch (error) {
    console.log(error);
  }
};
