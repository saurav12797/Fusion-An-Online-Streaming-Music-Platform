import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { Service } from "../../models/Service/service.model";
import { Category } from "../../models/Category/Category.model";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
import { deserialize } from "serializr";

const MetaService = () => {
  const [services, setServices] = useState<Service[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(false);

  /*  const getServices = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(ApiRoutes.SERVICES);
      const services = deserialize(Service, data?.services as any[]);
      setServices(services);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    setLoading(false);
    try {
      const { data } = await axiosInstance.get(ApiRoutes.CATEGORY);
      const categories = deserialize(Category, data?.categories as any[]);
      setCategories(categories);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    services,
    categories,
    getServices,
    getCategories,
  }; */
};

export default MetaService;
