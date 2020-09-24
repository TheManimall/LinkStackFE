import React, { useCallback, useContext, useEffect, useState } from 'react';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import LinksList from "../components/LinksList";

const LinkPage = (props) => {
  const [links, setLinks] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      setLinks(fetched)
    } catch (e) {

    }
  }, [token, request])

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  return(
  <div>
    {!loading && <LinksList links={links} />}
  </div>
)};

export default LinkPage;