import React from 'react';
import GotoBlog from "../../components/blog/goto-blog.components";
import BlogHeads from "../../components/blog/blog-header.components";

    
import { Container } from './blog-content.styles'

const BlogContent = () => (
    <Container>
        <GotoBlog />
        <BlogHeads className='blog'/>
    </Container>
)

export default BlogContent;