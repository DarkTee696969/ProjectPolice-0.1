const db = require("../config/db");

// =======================
// GET ALL
// =======================
exports.getItems = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM items ORDER BY id DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =======================
// CREATE
// =======================
exports.createItem = async (req, res) => {
  try {
    const {
      asset_number,
      item_name,
      category,
      quantity,
      source_station,
      received_date,
      remark
    } = req.body;

    await db.query(
      `INSERT INTO items
      (asset_number, item_name, category, quantity, source_station, received_date, remark)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [asset_number, item_name, category, quantity, source_station, received_date, remark]
    );

    res.status(201).json({ message: "Item created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =======================
// UPDATE
// =======================
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      asset_number,
      item_name,
      category,
      quantity,
      source_station,
      received_date,
      remark
    } = req.body;

    await db.query(
      `UPDATE items SET
        asset_number = ?,
        item_name = ?,
        category = ?,
        quantity = ?,
        source_station = ?,
        received_date = ?,
        remark = ?
      WHERE id = ?`,
      [asset_number, item_name, category, quantity, source_station, received_date, remark, id]
    );

    res.json({ message: "แก้ไขข้อมูลสำเร็จ" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =======================
// DELETE
// =======================
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(
      "DELETE FROM items WHERE id = ?",
      [id]
    );

    res.json({ message: "ลบข้อมูลสำเร็จ" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
