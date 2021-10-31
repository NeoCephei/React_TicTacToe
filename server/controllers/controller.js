const Task = require('../models/model')

const getTasks = async (req, res) => { // Get HTTP
  try {
    const tasks = await Task.find();
    res.send(tasks);

  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const postTask = async (req, res) => { // Post HTTP
  try {
    const content = req.body.content    //I could do {content} = req.body
    const task = await Task.create({content}) //This means content:content
    res.status(201);
    res.send(task);

  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const markTask = async (req, res) => { // Put HTTP
  try {
    const {id, flag} = req.params;
    let task;
    // Flag can be false/true/edit
    if (flag === 'edit') {
      const {content} = req.body //Accessing to req.body.content
      console.log('content on put?:',content);
      // const task = await Task.findByIdAndUpdate({_id:id},{content})
      res.send(task);
    } else if(flag === 'true'|| flag === 'false') {
      task = await Task.findByIdAndUpdate({_id: id},{finished: flag === 'true' ? true : false}, {new:true});
      res.send(task);
    }

  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const deleteTask = async (req, res) => { // Delete HTTP
  try {
    await Task.deleteOne({_id: req.params.id});
    res.sendStatus(204) //Succesful but no data in body

  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = {
  getTasks, postTask, markTask, deleteTask 
}