import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getInfodatas, getDelete, getPost } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "./useadmin.scss"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from 'axios';
function Homeadmin() {
  const [hotelinfo, sethotelinfo] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editinghotelinfo, setEditinghotelinfo] = useState(null);
  const [form] = Form.useForm();

  const Hotelinfo = async () => {
    try {
      const hotelinfoData = await getInfodatas();
      sethotelinfo(hotelinfoData);
    } catch (error) {
      console.error('Failed to retrieve Useful Infodata entries:', error);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    Hotelinfo();
  }, [hotelinfo]);

  const handleOpenModal = (hotel) => {
    setEditinghotelinfo(hotel);
    setModalOpen(true);
    form.setFieldsValue({
      useimg: hotel?.useimg || '',
      usename: hotel?.usename || '',
      usedesc: hotel?.usedesc || '',
    });
  };

  const handleEditData = (record) => {
    Swal.fire({
      title: "Edit Record",
      html: `
        <input id="edit-useimg" type="text" placeholder="Image :" value="${record.useimg}" class="swal2-input" />
        <input id="edit-usename" type="text" placeholder="Name" value="${record.usename}" class="swal2-input" />
        <input id="edit-usedesc" type="text" placeholder="Description" value="${record.usedesc}" class="swal2-input" />
        `,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const editeduseimg = Swal.getPopup().querySelector("#edit-useimg").value;
        const editedusename = Swal.getPopup().querySelector("#edit-usename").value;
        const editedusedesc = Swal.getPopup().querySelector("#edit-usedesc").value;

        if (!editeduseimg || !editedusename || !editedusedesc ) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }
        return {
          useimg: editeduseimg,
          usename: editedusename,
          usedesc: editedusedesc,
        };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const editedData = result.value;
        console.log("Edited Data:", editedData);

        try {
          await axios.put(`http://localhost:7374/api/useful/${record._id}`, editedData);
          // fetchData();
        } catch (error) {
          console.error(error);
          // Handle the error here
        }
      }
    });
  };


  const handleCloseModal = () => {
    setEditinghotelinfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletehotelinfo = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      dangerMode: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await getDelete(id);
          sethotelinfo(hotelinfo.filter((hotelinf) => hotelinf._id !== id));
          Swal.fire('Deleted!', 'Useful info entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Useful Info entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();


    const newHotel = {
      useimg: values.useimg,
      usename: values.usename,
      usedesc: values.usedesc,
    };

    await getPost(newHotel);



    handleCloseModal();
    // }
    // await Hotelinfo();

  };



  const columns = [
    {
      title: 'useimg',
      dataIndex: 'useimg',
      key: 'useimg',
      render: useimg => <img src={useimg} alt="useimg" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: 'usename',
      dataIndex: 'usename',
      key: 'usename',
    },
    {
      title: 'usedesc',
      dataIndex: 'usedesc',
      key: 'usedesc',
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (text, record) => (
        <Button
          style={{
            background: "#1677ff",
            color: "white",
            width: 80,
            height: 40,
            fontFamily: "chillax-regular",
          }}
          onClick={() => {
            handleEditData(record)
          }}
        >
          Edit
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="primary" danger onClick={() => handleDeletehotelinfo(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Counts</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '60%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={hotelinfo} />

          <Modal
            visible={modalOpen}
            title={editinghotelinfo ? 'Edit Useful Information Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="useimg"
                name="useimg"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="usename"
                name="usename"
                rules={[{ required: true, message: 'Please enter Spa Images' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="usedesc"
                name="usedesc"
                rules={[{ required: true, message: 'Please enter Spa Images' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Homeadmin