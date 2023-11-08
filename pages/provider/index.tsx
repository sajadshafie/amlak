import ProviderLayout from "@/Layout/providerLayout";
import React, { useEffect, useState } from "react";
import AppTable from "@/common/Apptable/AppTable";
import MessageCard from "@/libs/Messagecard";
import { toast } from "react-toastify";
import FormAdd from "@/components/provider/Advertising/form";
import { adviserType } from "@/types/addvertise";
import api from "@/config/api";
import global from "@/global";
import ConfrimModal from "@/components/confirmModal";
export async function getServerSideProps(context: any) {
  if (!context.req.cookies.usertoken) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return { props: {} };
}

type confrimType = {
  id?: null | number;
  name?: string;
  index?: number | null;
  isOpen?: boolean;
};

const provider = (): JSX.Element => {
  const titles = [
    "نوع زمین",
    "متراژ",
    "منطقه",
    "قیمت  ",
    "وضعیت",
    "مشاهده و تغییرات",
  ];
  const [listLoading, setListLoading] = useState<string>("loading");
  const [data, setData] = useState([]);
  const [confirmDetail, setConfirmDetail] = useState<confrimType>({
    id: null,
    name: "",
    index: null,
    isOpen: false,
  });
  const [form, setForm] = useState<adviserType>({
    title: "",
    meterage: "",
    description: "",
    shamim: "فثس",
    documentType: 0,
    price: 0,
    category: 0,
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<string | null>("");
  const onAddition = () => {
    setForm({
      meterage: "",
      price: 0,
      status: 0,
      title: "",
      id: 0,
      description: "",
      shamim: "فثس",
      documentType: 0,
      category: 0,
      images: [],
    });
    setIsOpen("add");
  };
  const onChangeForm = (val: string, type: string) => {
    setForm({
      ...form,
      [type]: val,
    });
  };
  const onUploadImage = (event: any) => {
    const ss = event.target.files[0];
    global.blobToImage(ss).then((res) => {
      const imgs = [...form.images, { base64: res, file: ss }];
      setForm({ ...form, images: imgs });
    });
  };
  const addImage = (id?: any, body?: any[]) => {
    api
      .insertImageAdvertise(id, body)
      .then((res) => {
        toast.success("اطلاعات آگهی با موفقیت ثبت شد");
        setLoading(false);
        setIsOpen(null);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("خطا در ثبت آگهی");
      });
  };
  const onRemoveImage = (v: any, index: number) => {
    setConfirmDetail({
      ...confirmDetail,
      index: index,
      isOpen: true,
      name: "این عکس",
    });
  };
  const removeAdvertise = () => {
    setLoading(true);
    api
      .removeAdvertise(confirmDetail.id)
      .then((res) => {
        setConfirmDetail({
          name: "",
          id: null,
          index: null,
          isOpen: false,
        });
        toast.success("حذف آگهی با موفقیت شنجام شد");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("حذف آگهی ناموفق ");
      });
  };
  const onConfirmModal = () => {
    if (confirmDetail.id == null) {
      console.log(confirmDetail);
      const img = [...form.images].filter((v, i) => i !== confirmDetail.index);
      setForm({
        ...form,
        images: img,
      });
      setConfirmDetail({
        index: null,
        isOpen: false,
        name: "",
        id: null,
      });
    } else {
      removeAdvertise();
    }
  };
  const handleAddNewAdvertise = () => {
    api
      .insertAdvertise({
        ...form,
        price: global.DecimalToNumber(form.price),
        meterage: global.DecimalToNumber(form.meterage),
      })
      .then((res) => {
        const fd = new FormData();
        fd.append("files", JSON.stringify(form.images?.map((v) => v.file)));
        addImage(res.data.result, fd);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("ثبت آگهی ناموفق");
      });
  };

  const handleEditAdvertise = () => {
    api
      .updateAdvertise(form.id, form)
      .then((res) => {
        setLoading(false);
        setIsOpen(null);

        GetData();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const onSubmitForm = () => {
    setLoading(true);
    isOpen == "add" ? handleAddNewAdvertise() : handleEditAdvertise();
  };

  const GetData = () => {
    setListLoading("loading");
    api
      .getAdvertiseList()
      .then((res) => {
        setListLoading("data");

        const response = res.data.result.map((v: adviserType, i: number) => {
          return {
            title: v.title,
            meterage: v.meterage.toLocaleString("en-CA"),
            address: "تهران - شهرری",
            price: v.price.toLocaleString("en-CA"),
            none: {
              description: v.description,
              id: v.id,
            },
            status: {
              content: global.statusResult(v.status)?.status,
              type: global.statusResult(v.status)?.type,
            },
            button: [
              {
                title: "edit",
              },
              {
                title: "delete",
              },
            ],
          };
        });
        setData(response);
      })
      .catch((err) => {
        console.log(err);
        setListLoading("error");
      });
  };
  const handleAction = (
    item: any,
    ind: number,
    content: any,
    data: any,
    index: number
  ) => {
    console.log(data);
    if (item == "edit") {
      setIsOpen("edit");
      setForm({
        meterage: data.meterage,
        price: data.price,
        status: data.status.content,
        title: data.title,
        id: data.none.id,
        description: data.none.description,
        shamim: "فثس",
        documentType: 0,
        category: 0,
      });
    } else {
      setConfirmDetail({
        id: data.none.id,
        isOpen: true,
        name: data.title,
        index: null,
      });
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <ProviderLayout active={1}>
      <ConfrimModal
        title={`آیا مطمعن هستید میخواهید ${confirmDetail.name} را حذف کنید`}
        isOpen={confirmDetail.isOpen}
        onClose={() => setConfirmDetail({ ...confirmDetail, isOpen: false })}
        onConfirm={onConfirmModal}
      />
      <FormAdd
        onRemoveImage={onRemoveImage}
        onUploadImage={onUploadImage}
        onChangeForm={onChangeForm}
        submitText="ثبت"
        cancelText="انصراف"
        form={form}
        open={isOpen == "add" || isOpen == "edit" ? true : false}
        onSubmit={onSubmitForm}
        onClose={() => setIsOpen(null)}
        loading={loading}
      />
      <MessageCard
        title="آگهی ها"
        backgroundColor2="#8ecae6"
        backgroundColor="#a8dadc"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با "
        imageSrc="/images/city.jpeg"
        imageHeight="245px"
        buttonText="افزودن ملک جدید"
        buttonAction={onAddition}
      />
      <AppTable
        isLoading={listLoading}
        rows={data}
        lables={titles}
        buttonDotted={true}
        handleAction={handleAction}
      />
    </ProviderLayout>
  );
};

export default provider;
