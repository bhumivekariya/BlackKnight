declare namespace authTypes {
  type loginRegisterParams = {
    email: string;
    password: string;
  };

  type confirmEmailParams = {
    id: stirng;
    token: stirng;
  };

  type forgotPasswordParams = { email: stirng };

  type resetPasswordParams = {
    email: string;
    newPassword: string;
    token: string;
  };

  type apiResponse = {
    success: boolean;
    data: object;
    message: string;
  };

  type userDetails = {
    firstName: string | null;
    lastName: string | null;
    roleId: string | null;
  };

  type updateUserProps = {
    firstName?: string;
    lastName?: string;
  };

  type UpdateUserRoleParams = {
    userId: string;
    roleId: string;
  };
}

declare namespace clientTypes {
  type addClient = {
    companyName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    gstNumber?: string;
  };

  type updateClient = {
    companyName?: string;
    userName?: string;
    userPassword?: string;
    phoneNumber?: string;
    gstNumber?: string;
  };

  type clientDetails = {
    id: string;
    companyName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    gstNumber?: string;
  };

  type getClients = Omit<Global.apiResponse, "data"> & {
    data: {
      count: number;
      data: clientDetails[];
    };
  };
  type getClient = Global.apiResponse<addClient>;
}

declare namespace jobworkerTypes {
  type addJobworker = {
    companyName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    fluteRate: number;
    linerRate?: number;
    gstNumber?: string;
  };

  type updateJobworker = {
    companyName?: string;
    userName?: string;
    userPassword?: string;
    phoneNumber?: string;
    fluteRate?: number;
    linerRate?: number;
    gstNumber?: string;
  };

  type jobworkerDetails = {
    id: string;
    companyName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    fluteRate: number;
    linerRate: number;
    gstNumber: string;
  };

  type getJobworkers = Omit<Global.apiResponse, "data"> & {
    data: {
      count: number;
      data: jobworkerDetails[];
    };
  };
  type getJobworker = Global.apiResponse<addJobworker>;
}

declare namespace productTypes {
  type addProduct = {
    boxName: string;
    brandId: number;
    topPaperTypeId: number;
    flutePaperTypeId: number;
    backPaperTypeId: number;
    length?: number;
    width?: number;
    height?: number;
    flap1?: number;
    flap2?: number;
    deckle: number;
    cutting: number;
    top: number;
    flute: number;
    back: number;
    noOfSheetPerBox: number;
    printTypeId: number;
    printingPlate?: string;
    ply: number;
    printRate: number;
    isLamination: boolean;
    dieCode?: number;
  };

  type updateProduct = {
    companyName?: string;
    userName?: string;
    userPassword?: string;
    phoneNumber?: string;
    fluteRate?: number;
    linerRate?: number;
    gstNumber?: string;
  };

  type productDetails = {
    id: string;
    companyName: string;
    userName: string;
    userPassword: string;
    phoneNumber: string;
    fluteRate: number;
    linerRate: number;
    gstNumber: string;
  };

  type getProducts = Omit<Global.apiResponse, "data"> & {
    data: {
      count: number;
      data: jobworkerDetails[];
    };
  };
  type getProduct = Global.apiResponse<addProduct>;
}
