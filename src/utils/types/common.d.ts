import type { TablePaginationConfig } from 'antd/lib/table';

export interface ITable {
	moreLoading: boolean,
	pagination: TablePaginationConfig,
	data: any,
	filter: IFilter,
	setFilter: (filter: any) => void,
	setPagination: (newPagination: TablePaginationConfig) => void,
}

export interface IModal {
	isModalVisible: boolean,
	handleOk: () => void,
	handleCancel: () => void,
	id: string,
}

export interface IFilter {
	[key: string]: string[];
}
