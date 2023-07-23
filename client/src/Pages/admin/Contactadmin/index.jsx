import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getformdatas, getformDelete } from '../../../api/httpsrequests';
import { Table, Button } from 'antd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Formm() {
  const [formadmin, setformadmin] = useState([]);
  const formpage = async () => {
    try {
      const formData = await getformdatas();
      setformadmin(formData);
    } catch (error) {
      console.error('Failed to retrieve Form entries:', error);
    }
  };
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (admin === null && !localStorage.getItem("loggedIn")) {
  //     navigate('/loginadmin');
  //   }
  // }, [])

  useEffect(() => {
    formpage();
  }, [formadmin]);
  const handleDeleteform = (id) => {
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
          await getformDelete(id);
          setformadmin(formadmin.filter((resitem) => resitem._id !== id));
          Swal.fire('Deleted!', 'form entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete form entry:', error);
        }
      }
    });
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'formusername',
      key: 'formusername',
    },
    {
      title: 'Last Name',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Email',
      dataIndex: 'formemail',
      key: 'formemail',
    },
    {
      title: 'Message',
      dataIndex: 'messages',
      key: 'messages',
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="primary" danger onClick={() => handleDeleteform(record._id)}>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
      <Helmet>
        <title>Form</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ width: '80%' }}>
          <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Contact Us Table</h1>
          <Table style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} columns={columns} dataSource={formadmin} />
        </div>
      </div>
    </>
  )
}

export default Formm