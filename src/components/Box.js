import React, { Component } from 'react'
import * as THREE from "three"
 
class Box extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 110, window.innerWidth/window.innerHeight, 0.5, 1000 );
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( 2300, 2300 );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdddddd, opacity: 0.6, transparent: true } );
    var cube = new THREE.Mesh( geometry, material );
    const edges = new THREE.EdgesGeometry( geometry );
    const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x303030 } ) );
    scene.add( cube, line );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      line.rotation.x += 0.01;
      line.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div>
  
      </div>
    )
  }
}

export default Box
