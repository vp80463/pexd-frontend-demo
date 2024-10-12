export default {
  VueForm: {
	labelSuffix: ':'
  },
  VueInputNumber: {
    useSeparator: true, 
    controls: false,
    textAlign: 'right'
  },
  VueNumberColumn: {    
    align: 'right', 
    headerAlign: 'center',   
    clearable: true,
    sortType:"number",
    editRender: {      
        attrs: {        
            size: 'small',        
            useSeparator: true,       
            controls: false,      
        },    
    },  
  },
  VueValueList: {
    togglePopoverOnClick: true,
    closeOnClickModal:true,
    clearable: true,
  },
  VueTable: {
    stripe: true,
    border: true,
    rowConfig: {
        isCurrent: true
    },
    keepSource: true,
    globalConfig: {
      table: {
        editConfig: { showStatus: true, mode: 'cell' }
      },
    },
    mouseConfig: { selected: true, extension: true },
    keyboardConfig: { isTab: true, isArrow: true, isEnter: true, isEdit: true },
    headerAlign: 'center',
    rowConfig: { isCurrent: true, isHover: true },
    columnConfig: { resizable: true}
  },
  VuePagination: {
    pageSize: 15,
    pageSizes: [10, 15, 20, 50, 100],
    layout: 'sizes, prev, pager, next, jumper, ->, total',
    background: true,
    small: true
  },
  VueInput: {
    clearable: true,
  },
  VueDatePicker: {
    clearable: true,
  },
  VuePanel: {
    collapse: true,
  }
};
