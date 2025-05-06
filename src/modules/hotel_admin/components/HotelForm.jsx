import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../../../common/input_field";
import CustomButton from "../../../common/button";
import { useLocation, useNavigate } from "react-router-dom";
import DropDownSelectField from "../../../common/drop_down_select_field";
import {
  addHotel,
  updateHotelDetails,
} from "../controller/hotel_admin_contoller";
import { useHotelFormData } from "../controller/useHotelForm";
import { FileButton, Button, Group, Text } from "@mantine/core";

const HotelForm = () => {
  const [file, setFile] = useState(null);
  const location = useLocation();
  const { hotelCategories, countries, cities } = useHotelFormData();
  const navigate = useNavigate();

  const hotelToEdit = location.state?.hotel;

  const initialValues = {
    id: hotelToEdit?._id || "",
    name: hotelToEdit?.name || "",
    hotelCategory: "",
    contactPerson: hotelToEdit?.contactPerson || "",
    contactNumber: hotelToEdit?.contactNumber || "",
    countryCode: hotelToEdit?.countryCode || "",
    countryId: "",
    cityId: "",
    address: hotelToEdit?.address || "",
    image: "",
    email: hotelToEdit?.email || "",
    website: hotelToEdit?.website || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Hotel name is required"),
    hotelCategory: Yup.string().required("Hotel category is required"),
    contactPerson: Yup.string().required("Contact person is required"),
    contactNumber: Yup.number()
      .typeError("Contact number must be a number")
      .required("Contact number is required"),
    countryCode: Yup.number()
      .typeError("Country code must be a number")
      .required("Country code is required"),
    countryId: Yup.string().required("Country is required"),
    cityId: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
    image: Yup.string(),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    website: Yup.string().url("Invalid website URL , also include https:// "), // optional
  });

  const handleSubmit = async (values) => {
    hotelToEdit?._id
      ? await updateHotelDetails({ values })
      : await addHotel({ values });
    navigate("/dashboard/hotel/allhotel");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {hotelToEdit ? "Edit Hotel" : "Add Hotel"}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col  gap-3 mx-10">
          <InputField
            label="Hotel Name"
            id="name"
            name="name"
            placeholder="enter name of Hotel"
          />

          <DropDownSelectField
            label="Hotel Category"
            name="hotelCategory"
            placeholder="select hotel Category"
            options={hotelCategories}
          />

          <InputField
            label="Contact Person Name"
            id="contactPerson"
            name="contactPerson"
          />
          <InputField
            label="Contact Number"
            id="contactNumber"
            name="contactNumber"
          />

          <InputField label="County Code" name="countryCode" id="countryCode" />

          <DropDownSelectField
            label="Country "
            name="countryId"
            placeholder="select Country"
            options={countries}
          />
          <DropDownSelectField
            label="City "
            name="cityId"
            placeholder="select City"
            options={cities}
          />

          <InputField label="Address" name="address" id="address" />
          {/* <InputField
            label="ImageUrl"
            name="image"
            id="image"
            placeholder="enter your image url"
          /> */}
          <InputField label="Email" name="email" id="email" />
          <InputField
            label="WebSite"
            name="website"
            id="website"
            placeholder="enter website url"
          />

          <Field name="image">
            {({ form }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      form.setFieldValue("image", reader.result); // base64 string
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="border p-2"
              />
            )}
          </Field>
          <ErrorMessage
            name="image"
            component="div"
            className="text-red-500 text-sm"
          />

          <CustomButton type="submit" btnColor="green">
            {hotelToEdit ? "Update" : "Submit"}
          </CustomButton>
        </Form>
      </Formik>
    </div>
  );
};

export default HotelForm;
