package com.zh.entity.user;

import java.util.Date;

public class User {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.id
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    private String id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.login_name
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    private String loginName;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.name
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    private String name;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.password
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    private String password;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.mobile
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    private String mobile;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column tb_user.create_time
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    private Date createTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.id
     *
     * @return the value of tb_user.id
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.id
     *
     * @param id the value for tb_user.id
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.login_name
     *
     * @return the value of tb_user.login_name
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public String getLoginName() {
        return loginName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.login_name
     *
     * @param loginName the value for tb_user.login_name
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.name
     *
     * @return the value of tb_user.name
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.name
     *
     * @param name the value for tb_user.name
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.password
     *
     * @return the value of tb_user.password
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.password
     *
     * @param password the value for tb_user.password
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.mobile
     *
     * @return the value of tb_user.mobile
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public String getMobile() {
        return mobile;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.mobile
     *
     * @param mobile the value for tb_user.mobile
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column tb_user.create_time
     *
     * @return the value of tb_user.create_time
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column tb_user.create_time
     *
     * @param createTime the value for tb_user.create_time
     *
     * @mbggenerated Fri Jul 01 13:58:47 CST 2016
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}