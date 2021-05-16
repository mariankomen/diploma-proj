import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {NavLink} from "react-router-dom";
import style from '../../../assets/style/scss/homepage/category-bar/categorybar.module.css'


const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function CategoryBar() {
    const classes = useStyles();

    return (
        <div className={style.main}>
            <span className={style.category}>Категорії</span>
            <div className={style.trees}>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    multiSelect
                >
                    <div className={`${style.tree_item}`}>

                        <TreeItem nodeId="1" label="Резистори">
                            <NavLink to={'/rezistor'}><TreeItem nodeId="2" label="Резистори"/></NavLink>
                            <TreeItem nodeId="3" label="Chrome"/>
                            <TreeItem nodeId="4" label="Webstorm"/>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="5" label="Конденсатори">
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js"/>
                                    <TreeItem nodeId="9" label="tree-view.js"/>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="10" label="Котушки">
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js"/>
                                    <TreeItem nodeId="9" label="tree-view.js"/>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="11" label="Діоди">
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js"/>
                                    <TreeItem nodeId="9" label="tree-view.js"/>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="12" label="Термістори">
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js"/>
                                    <TreeItem nodeId="9" label="tree-view.js"/>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="13" label="Мікросхеми">
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js"/>
                                    <TreeItem nodeId="9" label="tree-view.js"/>
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </div>
                </TreeView>
            </div>
        </div>
    );
}
