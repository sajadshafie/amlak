import ProviderLayout from "@/Layout/providerLayout";
import React, { ChangeEvent, useEffect, useState } from "react";
import AppTable from "@/common/Apptable/AppTable";
import MessageCard from "@/libs/Messagecard";
import { toast } from "react-toastify";
import FormAdd from "@/components/provider/Advertising/form";
import { adviserType } from "@/types/addvertise";
import api from "@/config/api";
import global from "@/global";
import ConfrimModal from "@/components/confirmModal";
import { useRouter } from "next/router";
import { imageURL } from "@/config/global";
import { useMediaQuery, Grid } from "@mui/material";
import ListTable from "@/libs/cardTable";
import BackTo from "@/libs/BackTo";
import SearchTable from "@/components/provider/SearchTable";
import propsTypeSearch from "@/types/searchTable";

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
  type?: string;
};

type paginationProps = {
  count: number;
  page: number;
  pageSize: number;
};

const Provider = (): JSX.Element => {
  const media = useMediaQuery("(min-width:870px)");
  const [pagination, setPagination] = useState<paginationProps>({
    count: 0,
    page: 1,
    pageSize: 10,
  });
  const titles = [
    "نوع زمین",
    "متراژ",
    "منطقه",
    "قیمت  ",
    "وضعیت",
    "مشاهده و تغییرات",
  ];
  const router = useRouter();
  const [searchField, setSearchField] = useState<propsTypeSearch>({
    documentType: 0,
    status: 0,
    title: "",
  });
  const [listLoading, setListLoading] = useState<string>("loading");
  const [data, setData] = useState([]);
  const [confirmDetail, setConfirmDetail] = useState<confrimType>({
    id: null,
    name: "",
    index: null,
    isOpen: false,
    type: "",
  });
  const [form, setForm] = useState<adviserType>({
    title: "",
    meterage: "",
    description: "",
    shamim: "فثس",
    documentType: 0,
    price: null,
    category: 0,
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<string | null>("");
  const [imagesRemoved, setImagesRemoved] = useState<string[] | object[]>([]);
  const ImageToformdata = (array: any) => {
    const fd = array?.map((v: any) => v.file);
    const formdata = new FormData();
    fd?.map((v: any, i: number) => {
      formdata.append(`files`, v);
    });

    return formdata;
  };
  const onAddition = () => {
    setForm({
      meterage: "",
      price: null,
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

  const updateAddImage = async () => {
    const filter = await form.images?.filter(
      (v: string | object) => typeof v !== "string"
    );
    if (filter.length >= 1) {
      api
        .uploadImageAdd(form.id, ImageToformdata(filter))
        .then((res) => {
          GetData();
        })
        .catch((err) => {
          console.log(err);
          toast.error("آپلود عکس نا موفق");
        });
    }
  };

  const onUploadImage = async (event: any) => {
    const ss = event.target.files[0];
    await global.blobToImage(ss).then((res) => {
      // console.log(form.images);
      const imgs = [...form.images, { base64: res, file: ss }];
      setForm({ ...form, images: imgs });
    });
  };

  const addImage = (id?: any, body?: any) => {
    api
      .insertImageAdvertise(id, body)
      .then((res) => {
        toast.success("اطلاعات آگهی با موفقیت ثبت شد");
        setLoading(false);
        setIsOpen(null);
        GetData();
      })
      .catch((err) => {
        setLoading(false);
        toast.error("خطا در ثبت آگهی");
      });
  };

  const onRemoveImage = (v: any, index: number) => {
    console.log(v);
    setConfirmDetail({
      ...confirmDetail,
      index: index,
      isOpen: true,
      name:
        typeof v == "string" ? v.substring(v.lastIndexOf("/") + 1) : "این عکس",
      type: "image",
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
        toast.success("حذف آگهی با موفقیت انجام شد");
        setLoading(false);
        GetData();
      })
      .catch((err) => {
        setLoading(false);
        toast.error("حذف آگهی ناموفق ");
      });
  };

  const removeImage = (id?: number, name?: string | string[] | object[]) => {
    console.log(id, name);
    api
      .deleteImage(id, name)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // (await confirmDetail.name) !== "این عکس" &&
    //   (await removeImage(form.id, confirmDetail.name));
  };

  const onConfirmModal = async () => {
    if (confirmDetail.type == "image") {
      const img = [...form.images].filter((v, i) => i !== confirmDetail.index);
      setForm({
        ...form,
        images: img,
      });
      await setImagesRemoved((state: any) => [...state, confirmDetail.name]);
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
        price: global.DecimalToNumber(form.price as string),
        meterage: global.DecimalToNumber(form.meterage as string),
      })
      .then((res) => {
        addImage(res.data.result, ImageToformdata(form.images));
      })
      .catch((err) => {
        setLoading(false);
        toast.error("ثبت آگهی ناموفق");
      });
  };

  const handleEditAdvertise = async () => {
    await api
      .updateAdvertise(form.id, {
        ...form,
        shamim: "4",
        price: global.DecimalToNumber(form.price as string),
        meterage: global.DecimalToNumber(form.meterage as string),
      })
      .then(async (res) => {
        imagesRemoved.length >= 1 &&
          (await removeImage(form.id, imagesRemoved));
        await updateAddImage();
        await setLoading(false);
        await setIsOpen(null);
        await toast.success("تغییرات با موفقیت ثبت شد");
        // await GetData();
      })
      .catch((err) => {
        setLoading(false);
        toast.error("خطا در ثبت اطلاعات");
        console.log(err);
      });
  };

  const onSubmitForm = () => {
    setLoading(true);
    isOpen == "add" ? handleAddNewAdvertise() : handleEditAdvertise();
  };

  const GetData = async (query?: string) => {
    setListLoading("loading");
    await api
      .advertiseAdvanceSearch(query)
      .then((res) => {
        setPagination({
          page: 1,
          pageSize: res.data.pageSize,
          count: Math.ceil(res.data.totalRecords / res.data.pageSize),
        });
        const response = res.data.result.map((v: adviserType, i: number) => {
          console.log(global.statusResult(v.status));
          const images =
            v.images && v.images.length >= 1
              ? v.images?.split(",").map((item: any) => `${imageURL + item}`)
              : [];
          return {
            title: v.title,
            meterage: v.meterage?.toLocaleString("en-CA"),
            address: "تهران - شهرری",
            price: v.price?.toLocaleString("en-CA"),
            none: {
              description: v.description,
              id: v.id,
              images: images,
              category: v.category,
            },
            status: {
              content: global.statusResult(v.status)?.status,
              type: global.statusResult(v.status)?.type,
              id: v.status,
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
        setListLoading("data");
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
        category: data.none.category,
        images: data.none.images,
      });
    } else if (item == "delete") {
      setConfirmDetail({
        id: data.none.id,
        isOpen: true,
        name: data.title,
        index: null,
      });
    } else {
      router.push({
        pathname: "/provider/advertise_detail/[index]",
        query: { index: data.none.id },
      });
    }
  };

  const onPagination = (e: any, value: number) => {
    GetData();
  };
  const onChangeSearchBar = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setSearchField({ ...searchField, [type]: e.target.value });
  };
  const onClickSearchBar = () => {
    const query = `${searchField.title ? `title=${searchField.title}` : ""} ${
      searchField.status ? `&status=${searchField.status}` : ""
    } ${
      searchField.documentType
        ? `&documentType=${searchField.documentType}`
        : ""
    }`;
    GetData(query.replace(/ +/g, ""));
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <ProviderLayout active={1}>
      <BackTo title="مشاهده سایت" link="/" />
      <ConfrimModal
        title={`آیا مطمعن هستید میخواهید ${confirmDetail.name} را حذف کنید`}
        isOpen={confirmDetail.isOpen}
        onClose={() => setConfirmDetail({ ...confirmDetail, isOpen: false })}
        onConfirm={onConfirmModal}
        loading={loading}
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
      <Grid mt={2}>
        <SearchTable
          onChange={onChangeSearchBar}
          onSearch={onClickSearchBar}
          searchField={searchField}
        />
      </Grid>
      {!media ? (
        <ListTable
          data={data}
          onAction={handleAction}
          totalPage={pagination.count}
          page={pagination.page}
          onPagination={onPagination}
          isLoading={listLoading}
        />
      ) : (
        <AppTable
          isLoading={listLoading}
          rows={data}
          lables={titles}
          buttonDotted={true}
          handleAction={handleAction}
          isPaginate
          totalPage={pagination.count}
          page={pagination.page}
          onPagination={onPagination}
        />
      )}
    </ProviderLayout>
  );
};

export default Provider;
